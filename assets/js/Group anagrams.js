function groupAnagrams() {
    const inputArray = document.getElementById("inputArray").value.split(",");
    const groupedAnagrams = groupAnagramsArray(inputArray);

    // Displaying the result
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>Result</h3>";
    groupedAnagrams.forEach(group => {
        outputDiv.innerHTML += `<p>[${group.join(", ")}]</p>`;
    });
}

function groupAnagramsArray(strs) {
    const map = new Map();

    // Grouping anagrams using a map
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Converting map values to an array
    return Array.from(map.values());
    
}
console.log('Resuit');