export function flattenJSON(json: JsonObject): any[] {
  const result: any[] = [];

  for (const key in json) {
    result.push(...json[key]);
  }

  return result;
}

export function renameAttributes(list: any, mapping: any) {
  return list.map((obj: any) => {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      if (mapping[key]) {
        newObj[mapping[key]] = obj[key];
      } else {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  });
}