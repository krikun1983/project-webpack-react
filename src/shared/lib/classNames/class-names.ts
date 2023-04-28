type Mode = Record<string, boolean | string>

export function classNames(cls: string, mods: Mode, additional: string[]) {
    return [cls, ...additional, ...Object.entries(mods)
        .filter(([className,  value]) => Boolean(value))
        .map(([className, value]) => className)
    ].join(' ')

}