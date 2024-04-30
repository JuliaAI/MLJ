interface Model {
    modelName: string;
    packageName: string;
    link: string;
}

interface ModelMap {
    [genre: string]: Model[];
}

export function markdownToJSON(markdown: string): ModelMap {
    const lines = markdown.split('\n');
    const modelMap: ModelMap = {};

    let currentGenre: string = '';

    for (const line of lines) {
        if (line.startsWith('## ')) {
            // Extract genre
            currentGenre = line.substring(3).trim();
            modelMap[currentGenre] = [];
        } else if (line.startsWith('- [')) {
            // Extract model name, package name, and link
            const match = line.match(/\[(.*?) \((.*?)\)\]\(@ref (.*?)\)/);
            if (match && match.length === 4) {
                const modelName = match[1].trim();
                const packageName = match[2].trim();
                const link = match[3].trim();
                modelMap[currentGenre].push({ modelName, packageName, link });
            }
        }
    }

    return modelMap;
}

interface JsonObject {
    [key: string]: any[];
  }
  
  export function flattenJSON(json: JsonObject): any[] {
    const result: any[] = [];
  
    for (const key in json) {
      result.push(...json[key]);
    }
  
    return result;
  }