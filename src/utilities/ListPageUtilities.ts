

export const extractIdFromUrl = (url: string): string | null => {//expected to return either a string (the extracted ID) or null (if no ID is found).
  const idMatch = url.match(/\/(\d+)\/$/); ///: Regular expression (regex) d is a digit character (0-9)
  return idMatch ? idMatch[1] : null;//return the id if found a match, if not skip to the next one 
};
export const stringNameHighlighter=(item:Person|Ship, filter:string)=>{

    const matchStart = item.name.toLowerCase().indexOf(filter.toLowerCase());//Finds the starting index (Example: "Lu" in Luke would be 0)
    const matchEnd = matchStart + filter.length;//sum the index of the match start plus the length of the filter of the name (lu) which is 2
    // Extract the parts of the name
    const beforeMatch = item.name.substring(0, matchStart);//The part of "Luke Skywalker" before "lu", which is an empty string ("") in this case.
    const matchText = item.name.substring(matchStart, matchEnd);// The matching part "lu" from "Luke Skywalker"
    const afterMatch = item.name.substring(matchEnd);//The part of "Luke Skywalker" after "lu", which is "ke Skywalker".
  return {beforeMatch,matchText,afterMatch}
}

  
