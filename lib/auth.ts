import bcrypt from 'bcryptjs'

export async function hashToken(token: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(token, salt)
}
