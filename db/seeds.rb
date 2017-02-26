# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do |floor|
  9.times do |room|
    beds = rand(1..3)
    Room.create \
      name: "#{floor + 1}0#{room + 1}",
      floor: floor + 1,
      occupied: [true, false].sample,
      smoking: [true, false].sample,
      pets: [true, false].sample,
      beds: beds,
      max_occupancy: beds * 2 + 1
  end
end
