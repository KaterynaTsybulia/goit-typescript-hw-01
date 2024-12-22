type AllType = {
    name: string;
    color: string;
    position: number;
    weight: number
};

function compare(top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position" | "weight">): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}
