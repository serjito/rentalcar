import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[100dvh] items-center justify-center flex flex-col">
      <div className="flex items-center justify-center flex-col space-y-4">
        <h1 className="text-xl font-bold">Rental Cars</h1>
        <img src="./logo.svg" alt="" height={80} width={80} />
      </div>
      <div className="items-center justify-center flex my-8">{children}</div>
    </div>
  );
}
