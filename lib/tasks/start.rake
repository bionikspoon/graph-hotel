desc 'Start foreman dev server'
task start: :environment do
  exec 'foreman start -p 3000'
end
