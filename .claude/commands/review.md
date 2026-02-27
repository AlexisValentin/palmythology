Analyse les changements en cours (git diff staged et unstaged) et vérifie :

1. Respect des conventions de nommage (.claude/naming-conventions.md)
2. Pas de "use client" inutile (Server Components par défaut)
3. Types stricts (pas de `any`, pas d'implicit any)
4. Tests présents pour les nouveaux composants (.test.tsx colocalisés)
5. Pas de secrets/env exposés dans le code
6. Conventions d'import respectées (pas d'import relatif profond)
7. Pas de console.log oublié

Fournis un rapport concis avec :
- Les problèmes trouvés (classés par sévérité)
- Les corrections nécessaires
- Un verdict global (prêt à commit ou non)
