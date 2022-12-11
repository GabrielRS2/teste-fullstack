import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import Contact from "./contact.entity";

@Entity("user")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column({ unique: true })
	cellphone: string;

	@Column()
	@Exclude()
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany(() => Contact, contact => contact.user, {eager: true, onDelete: "CASCADE"})
	contacts: Contact[]
}

export default User;