import "~/styles/globals.css";

export default function IndexPage() {
  return (
    <section className="container mx-auto flex max-w-screen-md flex-col">
      <div className="flex h-[70vh] flex-col justify-center">
        <h1 className="flex items-end gap-4 leading-tight tracking-tighter">
          <b className="text-2xl font-extrabold sm:text-4xl">Kodverk</b>
          <i className="text-lg font-medium sm:text-3xl">kodverket, plural</i>
        </h1>
        <p className="ml-6 text-lg text-muted-foreground">
          [Orklass]: Substantiv <br />
          [Uttal]: /kɔdˈværk/ <br />
        </p>
      </div>
    </section>
  );
}
