export default function PolicyLayout({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}
