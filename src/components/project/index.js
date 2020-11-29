import Image from "next/image";
import classnames from "classnames";

export default function Project({
  id,
  animated,
  name,
  description,
  tech,
  twisted,
}) {
  return (
    <div className="flex items-center mx-auto" key={id}>
      <div
        className={classnames("flex w-full flex-col ", {
          "lg:flex-row-reverse": twisted,
          "lg:flex-row": !twisted,
        })}
      >
        <a className="flex overflow-hidden rounded-md shadow-sm-white">
          <Image src={animated} width={771} height={450} loading="eager" />
        </a>
        <div
          className={classnames("flex flex-col justify-between flex-1", {
            "lg:mr-12": twisted,
            "lg:ml-12": !twisted,
          })}
        >
          <div className="flex flex-col">
            <h1 className="mt-4 text-2xl font-bold leading-relaxed text-center lg:my-0 lg:text-6xl lg:text-left">
              {name}
            </h1>
            <p
              className="my-2 leading-snug tracking-wide lg:max-w-md"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <ul className="flex flex-wrap items-center justify-center w-full max-w-lg gap-2 mx-auto my-4 lg:my-12 lg:justify-start lg:max-w-md lg:mx-auto">
            {tech.map((technology) => (
              <li
                className="px-2 py-1 text-sm font-semibold lowercase bg-black lg:text-lg text-gray-50 dark:text-gray-900 dark:bg-gray-50"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
