// import { AbilityBuilder, createMongoAbility } from '@casl/ability'

// const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

// export default build();

import { AbilityBuilder, Ability } from '@casl/ability'

const { can, cannot, build } = new AbilityBuilder(Ability);

export default build();
