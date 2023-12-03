export class DisjointSet {
    private rank: number[];
    private parent: number[];
    private n: number;

    constructor(n: number) {
        this.rank = new Array(n);
        this.parent = new Array(n);
        this.n = n;
        this.makeSet();
    }

    private makeSet(): void {
        for (let i = 0; i < this.n; i++) {
            this.parent[i] = i;
        }
    }

    public union(x: number, y: number): void {
        const xRoot = this.find(x);
        const yRoot = this.find(y);

        if (xRoot === yRoot) {
            return;
        }

        if (this.rank[xRoot] < this.rank[yRoot]) {
            this.parent[xRoot] = yRoot;
        } else if (this.rank[yRoot] < this.rank[xRoot]) {
            this.parent[yRoot] = xRoot;
        } else {
            this.parent[yRoot] = xRoot;
            this.rank[xRoot]++;
        }
    }

    public find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
}

// 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
// MONGO_URI=mongodb+srv://dandiazgo:QqH9y5aDciwOocg1@spun.9ajoy7u.mongodb.net/
// ACCESS_TOKEN="secret"
// PORT=4000
// FRONTEND_URL=http://localhost:3006