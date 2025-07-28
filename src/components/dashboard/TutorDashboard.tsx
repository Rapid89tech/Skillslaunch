import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  proofUrl: string;
  paymentRef?: string;
  paymentDate?: string;
  status: string;
}

export default function TutorDashboard() {
  const [pendingEnrollments, setPendingEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchPending() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://<YOUR_CLOUD_FUNCTION_URL>/getPendingEnrollments');
      if (!res.ok) throw new Error('Failed to fetch pending enrollments');
      setPendingEnrollments(await res.json());
    } catch (e: any) {
      setError(e.message || 'Error fetching enrollments');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPending();
  }, []);

  async function handleApprove(id: string) {
    await fetch(`https://<YOUR_CLOUD_FUNCTION_URL>/approveEnrollment?id=${id}`, { method: 'PATCH' });
    fetchPending();
  }
  async function handleReject(id: string) {
    await fetch(`https://<YOUR_CLOUD_FUNCTION_URL>/rejectEnrollment?id=${id}`, { method: 'PATCH' });
    fetchPending();
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pending Enrollments</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {pendingEnrollments.length === 0 && !loading && <div>No pending enrollments.</div>}
      {pendingEnrollments.map(e => (
        <div key={e.id} className="border rounded-lg p-4 mb-4 bg-white shadow">
          <div><b>User:</b> {e.userId}</div>
          <div><b>Course:</b> {e.courseId}</div>
          <div><b>Payment Ref:</b> {e.paymentRef || '-'}</div>
          <div><b>Payment Date:</b> {e.paymentDate || '-'}</div>
          <div className="my-2">
            <a href={e.proofUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Proof</a>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => handleApprove(e.id)} className="bg-green-600 text-white">Approve</Button>
            <Button onClick={() => handleReject(e.id)} className="bg-red-600 text-white">Reject</Button>
                  </div>
                </div>
              ))}
  </div>
);
} 