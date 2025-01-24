export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="lg:h-[calc(100vh-74px)] flex items-center justify-center dark:bg-[url(../public/black_polygons.jpg)] bg-[url(../public/white_polygons.jpg)] bg-cover">
      <div>{children}</div>
    </section>
  );
}
