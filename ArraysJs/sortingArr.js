nums.sort((a, b) => a - b)                    // numbers asc
nums.sort((a, b) => b - a)                    // numbers desc
strs.sort((a, b) => a.localeCompare(b))       // strings asc
arr.sort((a, b) => a.prop - b.prop)           // objects by number prop
arr.sort((a, b) => a.prop.localeCompare(b.prop)) // objects by string prop

nums.sort((a, b) => a - b)                    // numbers asc
nums.sort((a, b) => b - a)                    // numbers desc
strs.sort((a, b) => a.localeCompare(b))       // strings asc
arr.sort((a, b) => a.prop - b.prop)           // objects by number prop
arr.sort((a, b) => a.prop.localeCompare(b.prop)) // objects by string prop

// sort by default used for string based arrays not on number based
