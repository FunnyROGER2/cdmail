// ===============================================
// MOCKS
// ===============================================

module.exports = mocks = {
	dev: {
		arrow: `arrow-right-up`,
		sum: `− 5 000 000 000,01`,
		currency: `₽`,
		reason: `Перевод бизнесу от 22.12.2020 15:00`,
		shortname: `ИП Салатов Дмитрий Евгеньевич`,

		// Реквизиты
		recipientfullname: `ИП Оренбуров Максим Анатольевич`,
		recipientinn: `9704197938`,
		recipientorgntitle: `ОГРН`,
		recipientorgn: `1237700085314`,
		recipientkpp: `770401001`,
		recipientaccountnumber: `40702810700100377767`,
		bankfullname: `ООО «Бланк банк»`,
		bankinn: `6027006032`,
		bankbik: `044525801`,
		bankcorrespondentaccountnumber: `30101810645250000801`,
		bankaddress: `123112, г. Москва, 1-й Красногвардейский проезд, д. 22, стр. 1`,

		// Requisites
		beneficiary: `IP Lihacheva Natalya Rogov 1705304828146`,
		beneficiarybank: `Blanc Bank (LIMITED LIABILITY COMPANY)`,
		beneficiarysaccountnumber: `40802840300200152767`,
		swift: `VSTARUMM`,
		address: `Russian Federation, 123112, Moscow, 1-st Krasnogvardeyskiy proezd, 22, bld.1`,
		correspondentbank: `CREDIT BANK OF MOSCOW (PUBLIC JOINT STOCK COMPANY)`,
		correspondentbanknumber: `30109840200000000801`,
		correspondentswift: `MCRBRUMM`,
		correspondentaddress: `Bld 1, 2 Lukov lane, Moscow, Russia`,
	},
	prod: {
		arrow: `[% IF direction == 'Income' %]arrow-right-down[% ELSE %]arrow-right-up[% END %]`,
		sum: `[% summ %]`,
		currency: `[% currency %]`,
		reason: `[% reason %]`,
		shortname: `[% shortname %]`,

		// Реквизиты
		recipientfullname: `[% recipientfullname %]`,
		recipientinn: `[% recipientinn %]`,
		recipientorgntitle: `[% recipientorgntitle %]`,
		recipientorgn: `[% recipientorgn %]`,
		recipientkpp: `[% recipientkpp %]`,
		recipientaccountnumber: `[% recipientaccountnumber %]`,
		bankfullname: `[% bankfullname %]`,
		bankinn: `[% bankinn %]`,
		bankbik: `[% bankbik %]`,
		bankcorrespondentaccountnumber: `[% bankcorrespondentaccountnumber %]`,
		bankaddress: `[% bankaddress %]`,

		// Requisites
		beneficiary: `[% beneficiary %]`,
		beneficiarybank: `[% beneficiarybank %]`,
		beneficiarysaccountnumber: `[% beneficiarysaccountnumber %]`,
		swift: `[% swift %]`,
		address: `[% address %]`,
		correspondentbank: `[% correspondentbank %]`,
		correspondentbanknumber: `[% correspondentbanknumber %]`,
		correspondentswift: `[% correspondentswift %]`,
		correspondentaddress: `[% correspondentaddress %]`,
	},
};
