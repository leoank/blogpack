import clsx from "clsx";
import Image from "next/image";

export type LogoWithNameProps = {
  containerClassName?: string;
};

export function LogoWithName(props: LogoWithNameProps) {
  const { containerClassName } = props;
  return (
    <div
      className={clsx(
        "flex gap-3 items-center select-none",
        containerClassName
      )}
    >
      <Image
        className="size-8 mt-1 lg:size-12"
        height={64}
        width={64}
        src="/assets/logo.svg"
        alt="logo"
      />
      <div>
        <h1 className="font-light text-3xl lg:text-4xl">Ankur Kumar</h1>
      </div>
    </div>
  );
}
