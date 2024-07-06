import bcrypt from 'bcryptjs';

/**
 * Hache le mot de passe fourni.
 * @param password Mot de passe à hacher
 * @returns Le mot de passe haché
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

/**
 * Vérifie si le mot de passe fourni correspond au mot de passe haché.
 * @param password Mot de passe à vérifier
 * @param hashedPassword Mot de passe haché à comparer
 * @returns true si le mot de passe correspond, sinon false
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}
