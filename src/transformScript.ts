import type { TLocalTransformOptions } from "./";

export const transformScript = (
  code: string,
  localNameGenerator: TLocalTransformOptions["localNameGenerator"]
) => {
  return code.replace(
    /\$cssModule(?:\[['"`]([\w\-]+)['"`]\]|\.(\w+))/g,
    (_, classNameComputed: string, classNameProp: string) => {
      // wrap in quotes
      return JSON.stringify(localNameGenerator(classNameComputed ?? classNameProp));
    }
  );
};
