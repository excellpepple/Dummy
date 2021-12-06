
//Creates an array to hold the tags
const tags = [];

//Defines a function for creating tags. The first argument is the main tag, and the rest of the arguments are subtags.
const createTag = (tagName, ...subtags) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    tags.push(
        {
            tag: tagName,
            sub: subtags,
            value: [],
            isSelected: false,
            getAverage() {
                return (this.value.length == 0)? null: (this.value.reduce(reducer) / this.value.length);
            }
        }
    )
};

//Defines a function for displaying the tags
const displayTags = () => tags.forEach(item => console.log(`Tag name:\t${item.tag}\nSubtags:\t[${item.sub}]\nTag value:\t[${item.value}]\nAverage value:\t${item.getAverage()}\n`));

//Defines a function that returns all of the subtags of a given tag
function subtagsOf(tag) {
    let subtags;
    tags.forEach(object => object.tag == tag ? subtags = object.sub : "Tag cannot be found")
    return subtags
};

//Defines a function for adding subtags to a given tag.
const addSubtag = (tag, ...subtags) => tags.forEach(object => object.tag == tag ? subtags.forEach(subtag => object.sub.push(subtag)) : "Tag cannot be found")

//Defines a function that returns the tag of a given subtag
function tagOf(subtag) {
    let tag;
    tags.forEach(object => object.sub.forEach(item => item == subtag ? tag = object.tag : "Subtag cannot be found"))
    return tag
};

//Defines a function that returns a random subtag for a given tag
const randSubTag = tag => subtagsOf(tag)[Math.floor(Math.random() * subtagsOf(tag).length)]

//Defines a function that returns a random tag
const randTag = () => tags[Math.floor(Math.random() * tags.length)].tag

//Defines a function that deletes a given tag
const delTag = tag => tags.forEach(object => object.tag == tag ? tags.splice(tags.indexOf(object), tags.indexOf(object)) : "Tag cannot be found")

// Retruns a boolean value depending on whether or not the given tag exists
function isTag(tag) {
    let isTagFlag = false;
    tags.forEach(object => object.tag == tag ? isTagFlag = true : "")
    return isTagFlag
};

// Retruns a boolean value depending on whether or not the given tag has the given subtag
function isSubtag(tag, subtag) {
    let isSubtagFlag = false;
    tags.forEach(object => object.tag == tag ? object.sub.forEach(sub => sub == subtag ? isSubtagFlag = true : "") : "")
    return isSubtagFlag
};

const updateValue = (tagName, value) => {
    let message = ""
    tags.forEach(object => object.tag === tagName ? object.value.push(value) : message = "Tag cannot be found")
    // alert("updated")
    return message
};

//Adds different tags
createTag("Movies", "Horror", "Comedy", "Romance", "Sci-fi", "Action");
createTag("Pop Culture", "Celebrities", "T.V. Shows", "Video Games", "Sports", "Animals");
createTag("Politics", "Local Government", "National Government", "Elections", "International");
createTag("Current Events", "Natural Disasters", "Local News", "National News", "Other Nations");
createTag("Science", "Technology", "Math", "Biology", "Academic", "Medical");
createTag("Music", "Jazz", "Oldies", "Rap", "Pop", "Rock");
createTag("Economy", "National Economy", "Global Economy", "Stocks", "Investments", "Currency");



//Below is code to help debug.

//displayTags();

export {tags}