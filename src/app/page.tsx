import SyncAnimation from '@/components/sync-animation/SyncAnimation';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">
        The S.Y.N.C. Method™
      </h1>
      <div className="w-full">
        <SyncAnimation />
      </div>
      <div className="mt-8 text-center max-w-2xl">
        <p className="text-lg text-gray-700">
          A transformative approach to team alignment and leadership development.
        </p>
      </div>
    </main>
  );
}
