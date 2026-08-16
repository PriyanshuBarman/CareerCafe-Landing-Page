export default function PracticeDemo() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl">
        Practise calmly. Perform under pressure.
      </h2>

      <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row lg:gap-10">
        <div className="bg-input aspect-video flex-1 rounded-xl" />
        <div className="bg-input aspect-video flex-1 rounded-xl" />
      </div>
    </section>
  );
}
