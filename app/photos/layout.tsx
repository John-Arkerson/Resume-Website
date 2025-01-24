export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center dark:bg-[url(../public/black_polygons.jpg)] bg-[url(../public/white_polygons.jpg)] bg-cover">
      <div className="text-center items-center justify-center">{children}</div>
    </section>
  );
}
