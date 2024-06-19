import type { Actor } from "../../types"
import ActorAvatar from "../ActorAvatar"

export default function ActorAvatarGrid({
  actorAvatars,
}: {
  actorAvatars: Actor[]
}) {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center sm:justify-normal">
      {actorAvatars.map((actor, index: number) => (
        <ActorAvatar
          key={index}
          name={actor.name}
          profile_path={actor.profile_path}
        />
      ))}
    </div>
  )
}
