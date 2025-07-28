// enrollAllCourses.js
// Script to enroll a user in all courses in Firestore

const admin = require('firebase-admin');
const path = require('path');

// Path to your service account key
const serviceAccount = require(path.resolve(__dirname, 'serviceAccountKey.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const userEmail = 'siphod@gmail.com';

async function main() {
  try {
    // 1. Get user UID by email
    const userRecord = await admin.auth().getUserByEmail(userEmail);
    const userId = userRecord.uid;
    console.log(`User UID for ${userEmail}: ${userId}`);

    // 2. Get all course IDs
    const coursesSnapshot = await db.collection('courses').get();
    if (coursesSnapshot.empty) {
      console.log('No courses found.');
      return;
    }
    const courseIds = coursesSnapshot.docs.map(doc => doc.id);
    console.log(`Found ${courseIds.length} courses.`);

    // 3. Enroll user in each course
    const batch = db.batch();
    const enrollmentsRef = db.collection('enrollments');
    const now = admin.firestore.FieldValue.serverTimestamp();
    let created = 0;

    for (const courseId of courseIds) {
      // Check if already enrolled
      const existing = await enrollmentsRef
        .where('userId', '==', userId)
        .where('courseId', '==', courseId)
        .limit(1)
        .get();
      if (!existing.empty) {
        console.log(`Already enrolled in course ${courseId}`);
        continue;
      }
      const enrollmentDoc = enrollmentsRef.doc();
      batch.set(enrollmentDoc, {
        userId,
        courseId,
        enrolledAt: now
      });
      created++;
    }

    if (created === 0) {
      console.log('User is already enrolled in all courses.');
      return;
    }

    await batch.commit();
    console.log(`Enrolled user in ${created} courses.`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main(); 