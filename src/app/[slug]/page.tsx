type CatchAllPageProps = {
  params: {
    slug: string;
  };
};

export default function CatchAllPage({ params }: CatchAllPageProps) {
  return (
    <main>
      <h1>
        This is the catch all page which received slug: &quot;{params.slug}
        &quot;
      </h1>
    </main>
  );
}
