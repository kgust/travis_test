require 'rake/testtask'

task :default => [:test]

#task :test do
    #ruby "test/unittest.rb"
#end

Rake::TestTask.new do |t|
    t.libs << "test"
    t.test_files = FileList['test/tc_*.rb']
    t.verbose = true
end
