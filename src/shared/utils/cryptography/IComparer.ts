export interface IComparer {
    compare: (plaitext: string, digest: string) => Promise<boolean>
}

