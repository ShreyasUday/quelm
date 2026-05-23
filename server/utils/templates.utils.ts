export const interpolateTemplate = (
  template: string,
  variables: Record<string, string>,
): string => {
  return template.replace(/\{\{(.*?)\}\}/g, (_, key: string) => {
    const trimmedKey = key.trim();

    return variables[trimmedKey] ?? "";
  });
};
