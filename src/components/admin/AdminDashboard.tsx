const fetchPendingEnrollments = async () => {
  setLoadingEnrollments(true);
  const { data, error } = await supabase
    .from('enrollments')
    .select('*');
  if (error) {
    toast({
      title: 'Error',
      description: 'Failed to fetch pending enrollments.',
      variant: 'destructive',
    });
  } else {
    setPendingEnrollments(data || []);
  }
  setLoadingEnrollments(false);
}; 