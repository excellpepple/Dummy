import {
    tags as Tags,
} from '../data/tags'
import {
    articles as Articles,
} from '../global/FetchArticle'

let render = [];
let averages = [];
while (render.length < 5) {
    Tags.forEach(tag => averages.push(tag.getAverage()));
}
console.log(averages)