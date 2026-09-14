export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[50vh] items-center justify-center"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-khaki" />
    </div>
  );
}
