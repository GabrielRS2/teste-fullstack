import {
	Entity,
	PrimaryGeneratedColumn,
	OneToMany,
} from "typeorm";
import ContactsUser from "./contactsUser.entity";

@Entity("contacts")
class Contacts {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@OneToMany(() => ContactsUser, ContactsUser => ContactsUser.contactList)
	isContact: ContactsUser[]
}

export default Contacts;