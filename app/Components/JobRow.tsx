// Add 'use client' if you're using React Server Components (RSC)
'use client';

export default function JobRow() {
  return (
    <div className="bg-white p-2 rounded shadow">
      <h3 className="font-medium">Job Title</h3>
      <p className="text-sm text-gray-600">Job description or details here.</p>
    </div>
  );
}
