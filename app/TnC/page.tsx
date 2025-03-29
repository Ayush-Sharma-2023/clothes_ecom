import Navbar from "@/components/Navbar";

export default function TnC() {
  return (
    <>
      <div className="mt-10">
      <Navbar />

      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6">
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-5xl w-full text-center animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            By accessing and using this platform, you agree to follow our Terms & Conditions  
            outlined below. Please read them carefully before proceeding.
          </p>

          <div className="mt-8 text-left space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">User Responsibilities</h2>
              <p className="text-gray-600 text-lg mt-2">
                - Users must provide accurate and truthful information.  
                - Buying and selling should be conducted in good faith.  
                - Misuse of the platform, including scams or misleading listings, will result in account suspension.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Privacy & Security</h2>
              <p className="text-gray-600 text-lg mt-2">
                - We respect your privacy and do not sell user data.  
                - Users should avoid sharing personal or sensitive information publicly.  
                - All transactions are at users&apos; own risk; verify before making purchases.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Payment & Transactions</h2>
              <p className="text-gray-600 text-lg mt-2">
                - This platform does not process payments directly; buyers and sellers must handle transactions independently.  
                - We are not responsible for payment disputes; ensure clarity before finalizing any deal.  
                - Any fraudulent activity will result in an immediate ban from the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Content & Listing Rules</h2>
              <p className="text-gray-600 text-lg mt-2">
                - Listings must be legal, appropriate, and relevant to student needs.  
                - No spam, misleading ads, or prohibited items.  
                - Admins reserve the right to remove any content that violates these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Updates to Terms</h2>
              <p className="text-gray-600 text-lg mt-2">
                - We may update these Terms & Conditions at any time without prior notice.  
                - Continued use of the platform implies acceptance of new terms.  
                - Users are encouraged to review this page periodically.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-700">Acceptance of Terms</h2>
            <p className="text-gray-600 text-lg mt-3">
              By using this platform, you agree to abide by these Terms & Conditions.  
              If you do not agree with any part, please discontinue use immediately.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
