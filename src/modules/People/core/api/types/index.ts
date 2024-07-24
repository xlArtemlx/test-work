export type PeopleResponse<Entity> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Entity[];
};
