




  export function flattenJSON(json: JsonObject): any[] {
    const result: any[] = [];
  
    for (const key in json) {
      result.push(...json[key]);
    }
  
    return result;
  }