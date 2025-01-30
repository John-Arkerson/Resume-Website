export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-[calc(100vh-74px)] flex items-top justify-center overflow-hidden dark:bg-[url(../public/black_polygons.jpg)] bg-[url(../public/white_polygons.jpg)] bg-cover">
      <div>{children}</div>
    </section>
  );
}
