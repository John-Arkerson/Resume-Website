export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <section className="lg:h-[calc(100vh-74px)] flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <section className="lg:h-[calc(100vh-74px)] flex items-center justify-center dark:bg-[url(../public/black_polygons.jpg)] bg-[url(../public/white_polygons.jpg)] bg-cover">
      {/* <div className="inline-block max-w-lg text-center justify-center"> */}
      <div>
        {children}
      </div>
    </section>
  );
}
