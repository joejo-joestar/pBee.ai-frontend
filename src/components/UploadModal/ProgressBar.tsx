// TODO: Check how to get Progress
type Props = { progress: number; isError?: boolean };

export const ProgressBar = ({ progress, isError }: Props) => {
  // export const ProgressBar = ({ isError }: Props) => {
  const errored = isError ? `bg-red-400` : `bg-green-400`;
  return (
    <>
      <div className="h-2 w-auto overflow-hidden rounded-full bg-tabContainer">
        <div
          className={`h-2 origin-left-right rounded-full transition-all ${errored}`}
          style={isError ? { width: `100%` } : { width: `${progress}%` }}
        />
      </div>
    </>
  );
};
