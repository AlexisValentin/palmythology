Crée un nouveau composant pour $ARGUMENTS.

Étapes :
1. Détermine le bon emplacement (src/components/domains/ ou src/components/generics/)
2. Crée le composant en suivant les conventions de .claude/components.md :
   - Server Component par défaut (pas de "use client" sauf si nécessaire)
   - Interface Props typée et exportée
   - Nom de fichier en PascalCase
3. Crée le fichier test colocalisé (.test.tsx) avec au minimum :
   - Test de rendu basique
   - Test des props principales
4. Exporte le composant via le fichier index.ts du dossier parent

Utilise les patterns existants du projet comme référence.
