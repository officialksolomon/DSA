// solomon_uche👨‍💻👨‍💻👨‍💻
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.adjacent_list = [];
        this.marked = [];
        this.visited = [];
        for (let i = 0; i < vertices; ++i) {
            this.adjacent_list[i] = [];
            this.adjacent_list[i].push();
            this.marked[i] = false;


        }
        console.log(this.marked);

    }
    addEdge(v, w) {
        this.adjacent_list[v].push(w);
        this.adjacent_list[w].push(v);
    }

    showGraph() {
        for (let i = 0; i < this.vertices; ++i) {
            console.log(i + '->');
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adjacent_list[i][j] != undefined) {
                    console.log(this.adjacent_list[i][j] + ' ');
                }

            }
        }

    }
    breathFirstSearch(vertex) {
        this.marked[vertex] = true;
        if (this.adjacent_list[vertex] != undefined) {
            console.log("Visited vertex -> " + vertex);
            this.visited.push(vertex);
        }
        for (const w of this.adjacent_list[vertex]) {
            if (!this.marked[w]) {
                this.breathFirstSearch(w);
            }
        }

    }
}


const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(5, 7);
console.log(graph.adjacent_list);
graph.showGraph();
graph.breathFirstSearch(0);
console.log(graph.visited);