import type { Actor } from "../../types"

export default function ActorAvatar({ name, profile_path }: Actor) {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "https://www.timandorra.com/wp-content/uploads/2016/11/Imagen-no-disponible-282x300.png"
  return (
    <>
      <div className="rounded-full w-1/4 sm:w-24 h-32 text-center my-10 ">
        <a href="#">
          <img
            className="rounded-full border-2 border-black shadow-lg shadow-slate-400"
            src={imageUrl}
            alt={name}
          />
          <h2 className="font-semibold">{name}</h2>
        </a>
      </div>
    </>
  )
}
