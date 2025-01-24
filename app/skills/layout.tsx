export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="lg:h-[calc(100vh-74px)] flex items-center justify-center dark:bg-[url(../public/black_polygons.jpg)] bg-[url(../public/white_polygons.jpg)] bg-cover">
      <div className="text-center items-center justify-center">
        {children}
      </div>
    </section>
  );
}
