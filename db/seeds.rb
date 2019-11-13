# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


order1 = Order.create(delivery_date: "10/10/19", name: "Produce")
order2 = Order.create(delivery_date: "10/11/19", name: "Produce")


item1 = Item.create(name: "apples1", par: 2)
item2 = Item.create(name: "pears", par: 24)
item3 = Item.create(name: "avacados", par: 8)