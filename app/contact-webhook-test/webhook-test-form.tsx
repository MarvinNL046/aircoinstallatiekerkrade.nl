"use client";

export default function WebhookTestForm() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800">
          <strong>Notice:</strong> The GoHighLevel webhook test has been removed.
          Contact form submissions now use EmailJS + LeadFlow CRM.
        </p>
      </div>
      <p className="text-gray-600">
        Please use the main <a href="/contact" className="text-blue-600 underline">contact page</a> to test form submissions.
      </p>
    </div>
  );
}
