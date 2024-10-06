export default function Footer() {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Learning Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}