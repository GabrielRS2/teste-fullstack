import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	OneToMany,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { Exclude } from "class-transformer";
import Contacts from "./contacts.entity";
import ContactsUser from "./contactsUser.entity";

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

    @OneToOne(() => Contacts, {eager: true}) @JoinColumn()
    contacts: Contacts

	@OneToMany(() => ContactsUser, ContactsUser => ContactsUser.user)
	isContact: ContactsUser[]
}

export default User;