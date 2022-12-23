
export default function ApiDoc() {
  return (
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
              <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase bg-gray-900">/api/auth</h2>
          </div>

          <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-blue-500">
                              GET
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/auth/</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Retourne une clé d'api au format : {"{token: string,lifetime: string}"}.
                      </dd>
                  </div>
              </dl>
          </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
              <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase bg-gray-900">/api/stats</h2>
          </div>

          <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-blue-500">
                              GET
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/stats/player_count</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Retourne le nombre de joueurs inscrits dans la base de données au format: {"{token: string,lifetime: string}"}.
                      </dd>
                  </div>
              </dl>
          </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
              <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase bg-gray-900">/api/players</h2>
          </div>

          <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-blue-500">
                              GET
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/players/</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Retourne un tableau contenant la liste des joueurs au format: {`
                                                                                          {
                                                                                            "id": string,
                                                                                            "name": string,
                                                                                            "nbt": JSON,
                                                                                            "textures": JSON,
                                                                                            "updated": string
                                                                                          }
                                                                                        `}
                      </dd>
                  </div>
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-blue-500">
                              GET
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/players/$nom</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Retourne un tableau contenant la liste des joueurs ayant $nom à la valeur "name" au format: {`
                                                                                          {
                                                                                            "id": string,
                                                                                            "name": string,
                                                                                            "nbt": JSON,
                                                                                            "textures": JSON,
                                                                                            "updated": string
                                                                                          }
                                                                                        `}
                      </dd>
                  </div>
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-blue-500">
                              GET
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/players/uuid/$uuid</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Retourne un tableau contenant le joueur ayant le UUID $uuid au format: {`
                                                                                          {
                                                                                            "id": string,
                                                                                            "name": string,
                                                                                            "nbt": JSON,
                                                                                            "textures": JSON,
                                                                                            "updated": string
                                                                                          }
                                                                                        `}
                      </dd>
                  </div>
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-red-500">
                              DELETE
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/players/uuid/delete/$uuid/$apiKey</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Supprime le joueur ayant le UUID $uuid si la clé d'api $apiKey est valide.
                      </dd>
                  </div>
                  <div class="relative">
                      <dt>
                          <h4 class="absolute flex items-center justify-center w-20 h-8 rounded-md  tracking-wide font-regular text-sm text-red-500">
                              PUT
                          </h4>
                          <h5 class="pt-1 ml-24 text-lg leading-6 font-medium text-gray-900">api/players/uuid/parse/$uuid</h5>
                      </dt>
                      <dd class="mt-1 ml-24 text-base text-gray-500">
                        Crée ou met à jour le joueur ayant le UUID $uuid et retourne le joueur au format: {`
                                                                                          {
                                                                                            "id": string,
                                                                                            "name": string,
                                                                                            "nbt": JSON,
                                                                                            "textures": JSON,
                                                                                            "updated": string
                                                                                          }
                                                                                        `}
                      </dd>
                  </div>
              </dl>
          </div>
      </div>
    </div>
  );
}
