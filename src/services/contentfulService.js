import * as contentful from "contentful";

const client = contentful.createClient({
        space: 'z1ydzalb7kpj',
        accessToken: '5F2MrOCUIXjig420deajpubocE3qG02Y6Xy6vN00VJk',
        removeUnresolved: false
    }
);

const query = (query) => client.getEntries(query);

export default {
    query: query
}
